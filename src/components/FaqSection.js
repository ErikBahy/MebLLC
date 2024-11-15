import React from "react";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { t } from "i18next";

const useStyles = makeStyles((theme) => ({
  accordion: {
    // Remove shadow
    boxShadow: "none",
    "&:before": {
      // Remove default divider
      display: "none",
    },
    // Add a custom border
    "&:not(:last-child)": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  expanded: {
    margin: `0 !important`,
  },
  summary: {
    minHeight: 78,
  },
  summaryContent: {
    margin: "0 !important",
  },
}));

function FaqSection(props) {
  const classes = useStyles();

  const items = [
    {
      question: t('faq.licensing.question'),
      answer: t('faq.licensing.answer'),
    },
    {
      question: t('faq.training.question'),
      answer: t('faq.training.answer'),
    },
    {
      question: t('faq.response.question'),
      answer: t('faq.response.answer'),
    },
    {
      question: t('faq.equipment.question'),
      answer: t('faq.equipment.answer'),
    },
    {
      question: t('faq.customization.question'),
      answer: t('faq.customization.answer'),
    },
    {
      question: t('faq.insurance.question'),
      answer: t('faq.insurance.answer'),
    }
  ];
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container maxWidth="md">
      <SectionHeader
  title={t('faq.title')}
  subtitle={t('faq.subtitle')}
  size={4}
  textAlign="center"
/>

        {items.map((item, index) => (
          <Accordion
            classes={{
              root: classes.accordion,
              expanded: classes.expanded,
            }}
            key={index}
          >
            <AccordionSummary
              classes={{
                root: classes.summary,
                content: classes.summaryContent,
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`faq-panel-${index}`}
            >
              <Typography variant="h6">{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Section>
  );
}

export default FaqSection;
