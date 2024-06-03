import {
    Box,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
  } from "@mui/material";
  import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
  
  import { useState } from "react";
  
  const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);
  
    const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              repellendus. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Qui perferendis ad distinctio corporis quos saepe
              nam cumque ipsum repellendus repudiandae aperiam sed minima
              laudantium maxime iusto nihil consequuntur, ipsam illo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            id="panel2-header"
            aria-controls="panel2-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              repellendus. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Qui perferendis ad distinctio corporis quos saepe
              nam cumque ipsum repellendus repudiandae aperiam sed minima
              laudantium maxime iusto nihil consequuntur, ipsam illo.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            id="panel3-header"
            aria-controls="panel3-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordion 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              repellendus. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Qui perferendis ad distinctio corporis quos saepe
              nam cumque ipsum repellendus repudiandae aperiam sed minima
              laudantium maxime iusto nihil consequuntur, ipsam illo.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    );
  };
  
  export default MuiAccordion;
  