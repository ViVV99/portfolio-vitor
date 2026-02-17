"use client";

import React from 'react';
import { 
  Box, 
  Typography, 
  LinearProgress, 
  Paper,
  Chip,
  Stack
} from '@mui/material';
import { styled } from '@mui/material/styles';

export interface Skill {
  name: string;
  level: number; // 0-100
  category?: string;
  yearsOfExperience?: number;
}

interface SkillProgressListProps {
  skills: Skill[];
  title?: string;
  showCategory?: boolean;
}

const SkillPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  background: theme.palette.background.paper,
  border: `1px solid${theme.palette.primary.main}33`,
}));

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor: `${theme.palette.primary.main}1a`,
  '& .MuiLinearProgress-bar': {
    borderRadius: 5,
    background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  },
}));

const SkillItem = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.spacing(1.5),
  background: `${theme.palette.primary.main}08`,
  border: `1px solid ${theme.palette.primary.main}26`,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: `${theme.palette.primary.main}14`,
    borderColor: `${theme.palette.primary.main}4d`,
    transform: 'translateX(8px)',
  },
}));

function getSkillLabel(level: number): { text: string; color: string } {
  if (level >= 90) return { text: 'Expert', color: '#ffd700' };
  if (level >= 70) return { text: 'Advanced', color: '#00e676' };
  if (level >= 50) return { text: 'Intermediary', color: '#00e5ff' };
  return { text: 'Begginer', color: '#a5d6a7' };
}

export default function SkillProgressList({ 
  skills, 
  title = 'Habilidades Técnicas',
  showCategory = true 
}: SkillProgressListProps) {
  return (
    <SkillPaper>
      <Typography 
        variant="h4" 
        gutterBottom 
        sx={(theme ) => ({ 
          mb: 3,
          fontWeight: 600,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        })}
      >
        {title}
      </Typography>
      
      <Stack spacing={2.5}>
        {skills.map((skill, index) => {
          const skillLabel = getSkillLabel(skill.level);
          
          return (
            <SkillItem key={index}>
              {/* TODO - Add btn to mobile to show more info */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5, 
              flexWrap: {
                  xs: 'wrap',
                  md: 'nowrap'
                } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {skill.name}
                  </Typography>
                  
                  {showCategory && skill.category && (
                    <Chip 
                      label={skill.category} 
                      size="small"
                      sx={{ 
                        height: 24,
                        fontSize: '0.75rem',
                      }}
                    />
                  )}
                </Box>
                
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {skill.yearsOfExperience && (
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: 'text.secondary',
                        fontSize: '0.85rem',
                        display: {
                          xs: 'none',
                          sm: 'block'
                        }
                      }}
                    >
                      {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? 'year' : 'years'}
                    </Typography>
                  )}
                  
                  <Chip 
                    label={skillLabel.text}
                    size="small"
                    sx={{
                      backgroundColor: `${skillLabel.color}22`,
                      color: skillLabel.color,
                      borderColor: skillLabel.color,
                      border: '1px solid',
                      fontWeight: 500,
                    }}
                  />
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <StyledLinearProgress 
                  variant="determinate" 
                  value={skill.level} 
                  sx={{ flexGrow: 1 }}
                />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main',
                    minWidth: 45,
                    textAlign: 'right',
                  }}
                >
                  {skill.level}%
                </Typography>
              </Box>
            </SkillItem>
          );
        })}
      </Stack>
    </SkillPaper>
  );
}