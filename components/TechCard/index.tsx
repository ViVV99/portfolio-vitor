"use client";

import React from "react";
import { Card, CardContent, Chip, Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface TechCardProps {
  title: string;
  description: string;
  tags?: string[];
  icon?: React.ReactNode;
  gradient?: boolean;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  borderRadius: 12,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}33 0%, ${theme.palette.secondary.main}1a 100%)`,
  border: `1px solid ${theme.palette.primary.main}4d`,
  marginBottom: theme.spacing(2),
  "& svg": {
    fontSize: 28,
    color: theme.palette.primary.main,
  },
}));

export type TechCardListProps = React.PropsWithChildren & {
  data: TechCardProps[];
};

export function TechCardList({ data }: TechCardListProps) {
  if (!data?.length) {
    return <Typography>Data Not Found</Typography>;
  }

  return (
    <Grid container justifyContent="center" spacing={2}>
      {data.map((item) => (
        <Grid
          flexGrow={1}
          size={{
            xs: 12,
            sm: 6,
            md: "grow",
          }}
          key={item.title}
        >
          <TechCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
}

export function TechCard({
  title,
  description,
  tags = [],
  icon,
  gradient = false,
}: TechCardProps) {
  return (
    <StyledCard>
      <CardContent
        sx={{
          flexGrow: 1,
          pt: 3,
        }}
      >
        {icon && <IconWrapper>{icon}</IconWrapper>}

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          sx={(theme) => ({
            fontWeight: 600,
            background: gradient
              ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`
              : "none",
            WebkitBackgroundClip: gradient ? "text" : "none",
            WebkitTextFillColor: gradient ? "transparent" : "inherit",
            backgroundClip: gradient ? "text" : "none",
          })}
        >
          {title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.7 }}
        >
          {description}
        </Typography>

        {tags.length > 0 && (
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: "auto" }}>
            {tags.map((tag, index) => (
              <Chip key={index} label={tag} size="small" variant="filled" />
            ))}
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
}
