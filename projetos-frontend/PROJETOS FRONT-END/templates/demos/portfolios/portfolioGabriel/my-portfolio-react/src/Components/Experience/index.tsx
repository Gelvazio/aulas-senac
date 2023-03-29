import React, { useEffect } from "react";
import { supabase } from "../../services/supabase-config";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDetails,
  CardDetailsTitle,
  CardTitle,
  Container,
} from "./style";

type ExperienceData = {
  id: string;
  name: string;
  description: string;
}[];

export const Experience = () => {
  const [frontendData, setFrontendData] = useState<ExperienceData | null>(null);
  const [backendData, setBackendData] = useState<ExperienceData | null>(null);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase.from("Frontend").select("*");
      if (error) throw error;
      setFrontendData(data);
    } catch (error) {
      console.log(error);
    }
    try {
      const { data, error } = await supabase.from("Backend").select("*");
      if (error) throw error;
      setBackendData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section id="experience">
      <h5>The Skills I Have</h5>

      <h2>My Experience</h2>
      <Container>
        <Card>
          <CardTitle>Frontend Development</CardTitle>
          <CardContent>
            {frontendData?.map((item) => (
              <CardDetails key={item.id}>
                <CardDetailsTitle>{item.name}</CardDetailsTitle>
                <small>{item.description}</small>
              </CardDetails>
            ))}
          </CardContent>
        </Card>
        {/*---------- END OF FRONTEND {/*----------*/}
        <Card>
          <CardTitle>Backend Development</CardTitle>
          <CardContent>
            {backendData?.map((item) => (
              <CardDetails key={item.id}>
                <CardDetailsTitle>{item.name}</CardDetailsTitle>
                <small>{item.description}</small>
              </CardDetails>
            ))}
          </CardContent>
        </Card>
      </Container>
    </section>
  );
};
