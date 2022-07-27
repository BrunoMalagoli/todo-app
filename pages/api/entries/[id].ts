import type { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import { db } from "../../../database";
import { Entry, IEntry } from "../../../models";

type Data = { message: string } | IEntry | null;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "El id no es valido" });
    return;
  }
  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return getEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);
    default:
      return res.status(400).json({ message: "Metodo no existente" });
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id } = req.query;
    await db.connect();
    const entryById = await Entry.findById(id);
    await db.disconnect();
    if (!entryById) {
      res.status(400).json({
        message: "No se encontró una entrada con el siguiente ID: " + id,
      });
      return;
    }
    res.status(200).json({ message: entryById! });
  } catch (error) {
    res.status(400).json({ message: "Ocurrió un error" });
  }
};

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  await db.connect();
  const entryToUpdate = await Entry.findById(id);
  if (!entryToUpdate) {
    return res.status(400).json({ message: "No hay entrada con ese ID:" + id });
  }
  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry!);
  } catch (error: any) {
    await db.disconnect();
    res.status(400).json({ message: error.errors.this.status.message });
  }
};
const deleteEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;
  try {
    await db.connect();
    await Entry.findByIdAndDelete(id);
    await db.disconnect();
    return res.status(200).json({ message: "Entrada eliminada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "No se pudo eliminar la entrada, revisar consola del servidor",
    });
  }
};
