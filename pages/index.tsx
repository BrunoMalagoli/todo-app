import type { NextPage } from "next";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "../components/layouts";
import { EntryList, NewEntry } from "../components/ui";
const HomePage: NextPage = () => {
  return (
    <Layout title="Home - toDoApp">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "85vh" }}>
            <CardHeader title="Pendientes" />
            <CardContent>
              <NewEntry />
              <EntryList status="pending" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "85vh" }}>
            <CardHeader title="En Progreso" />
            <CardContent>
              <EntryList status="in-progress" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "85vh" }}>
            <CardHeader title="Completadas" />
            <CardContent>
              <EntryList status="finished" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
