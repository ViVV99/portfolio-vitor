"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Chip,
  Button,
  Grid,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import VerifiedIcon from "@mui/icons-material/Verified";
import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BusinessIcon from "@mui/icons-material/Business";

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  logo?: string;
  skills?: string[];
  description?: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

const CertCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  border: `1px solid ${theme.palette.primary.main}33`,
  borderRadius: 16,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.3s ease",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  },
  "&:hover": {
    borderColor: `${theme.palette.primary.main}80`,
    boxShadow: `0 8px 32px ${theme.palette.primary.main}33`,
    transform: "translateY(-8px)",
  },
}));

const LogoBox = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: 12,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}1a 0%, ${theme.palette.secondary.main}0d 100%)`,
  border: `1px solid ${theme.palette.primary.main}4d`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  "& img": {
    width: "70%",
    height: "70%",
    objectFit: "contain",
  },
}));

const VerifiedBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  right: 16,
  display: "flex",
  alignItems: "center",
  gap: 4,
  padding: "4px 12px",
  borderRadius: 20,
  background: theme.palette.primary.main + "26",
  border: `1px solid ${theme.palette.primary.main}66`,
}));

export default function CertificationsList({
  certifications,
}: CertificationsProps) {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const handleOpen = (cert: Certification) => {
    setSelectedCert(cert);
  };

  const handleClose = () => {
    setSelectedCert(null);
  };

  const isExpired = (expiryDate?: string) => {
    if (!expiryDate) return false;
    return new Date(expiryDate) < new Date();
  };

  return (
    <>
      <Grid container spacing={3}>
        {certifications.map((cert) => (
          <Grid
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
            key={cert.id}
          >
            <CertCard onClick={() => handleOpen(cert)}>
              <VerifiedBadge>
                <VerifiedIcon sx={{ fontSize: 16, color: "primary.main" }} />
                <Typography
                  variant="caption"
                  sx={{ color: "primary.main", fontWeight: 600 }}
                >
                  Verified
                </Typography>
              </VerifiedBadge>

              <LogoBox>
                {cert.logo ? (
                  <img src={cert.logo} alt={cert.issuer} />
                ) : (
                  <BusinessIcon sx={{ fontSize: 40, color: "primary.main" }} />
                )}
              </LogoBox>

              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontWeight: 600,
                  minHeight: 56,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {cert.title}
              </Typography>

              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {cert.issuer}
              </Typography>

              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
              >
                <CalendarTodayIcon
                  sx={{ fontSize: 16, color: "text.secondary" }}
                />
                <Typography variant="caption" color="text.secondary">
                  {new Date(cert.issueDate).toLocaleDateString("pt-BR", {
                    month: "short",
                    year: "numeric",
                  })}
                </Typography>
                {cert.expiryDate && (
                  <>
                    <Typography variant="caption" color="text.secondary">
                      •
                    </Typography>
                    <Chip
                      label={isExpired(cert.expiryDate) ? "Expired" : "Valid"}
                      size="small"
                      color={isExpired(cert.expiryDate) ? "error" : "success"}
                      sx={{ height: 20 }}
                    />
                  </>
                )}
              </Box>

              {cert.skills && cert.skills.length > 0 && (
                <Box
                  sx={{
                    display: "flex",
                    gap: 0.5,
                    flexWrap: "wrap",
                    mt: "auto",
                  }}
                >
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <Chip
                      key={index}
                      label={skill}
                      size="small"
                      variant="filled"
                    />
                  ))}
                  {cert.skills.length > 3 && (
                    <Chip
                      label={`+${cert.skills.length - 3}`}
                      size="small"
                      variant="filled"
                    />
                  )}
                </Box>
              )}
            </CertCard>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={Boolean(selectedCert)}
        onClose={handleClose}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: (theme) => ({
              borderRadius: 3,
              border: `1px solid ${theme.palette.primary.main}4d`,
            }),
          },
        }}
      >
        {selectedCert && (
          <>
            <DialogTitle
              component="div"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                pb: 1,
              }}
            >
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {selectedCert.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {selectedCert.issuer}
                </Typography>
              </Box>
              <IconButton onClick={handleClose} size="small" color="primary">
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <Divider
              sx={(theme) => ({
                borderColor: `${theme.palette.primary.main}33`,
              })}
            />

            <DialogContent sx={{ pt: 3 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}
              >
                <LogoBox sx={{ width: 60, height: 60 }}>
                  {selectedCert.logo ? (
                    <img src={selectedCert.logo} alt={selectedCert.issuer} />
                  ) : (
                    <BusinessIcon
                      sx={{ fontSize: 32, color: "primary.main" }}
                    />
                  )}
                </LogoBox>

                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      mb: 0.5,
                    }}
                  >
                    <CalendarTodayIcon
                      sx={{ fontSize: 16, color: "text.secondary" }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      Emission date:{" "}
                      {new Date(selectedCert.issueDate).toLocaleDateString(
                        "pt-BR",
                      )}
                    </Typography>
                  </Box>

                  {selectedCert.expiryDate && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <CalendarTodayIcon
                        sx={{ fontSize: 16, color: "text.secondary" }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        Expires:{" "}
                        {new Date(selectedCert.expiryDate).toLocaleDateString(
                          "pt-BR",
                        )}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>

              {selectedCert.description && (
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {selectedCert.description}
                  </Typography>
                </Box>
              )}

              {selectedCert.credentialId && (
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    gutterBottom
                  >
                    Credential Id
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "monospace",
                      color: "primary.main",
                      wordBreak: "break-all",
                    }}
                  >
                    {selectedCert.credentialId}
                  </Typography>
                </Box>
              )}

              {selectedCert.skills && selectedCert.skills.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="block"
                    gutterBottom
                  >
                    Abilities
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {selectedCert.skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        size="small"
                        variant="filled"
                      />
                    ))}
                  </Box>
                </Box>
              )}

              {selectedCert.credentialUrl && (
                <Button
                  variant="contained"
                  fullWidth
                  endIcon={<LaunchIcon />}
                  href={selectedCert.credentialUrl}
                  target="_blank"
                >
                  See Credential
                </Button>
              )}
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
