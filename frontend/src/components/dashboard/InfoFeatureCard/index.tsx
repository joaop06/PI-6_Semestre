import { Box, Typography, useTheme } from "@mui/material";

import { InfoCard } from "./styles";

type Props = {
  icon: React.ElementType;
  title: string;
  description: string;
};

export function InfoFeatureCard({ icon: Icon, title, description }: Props) {
  const theme = useTheme();

  return (
    <InfoCard>
      <Box display="flex" alignItems="center" mb={1}>
        <Icon sx={{ color: theme.palette.primary.main, mr: 1 }} />

        <Typography variant="subtitle2" fontWeight="600">
          {title}
        </Typography>
      </Box>

      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </InfoCard>
  );
}
