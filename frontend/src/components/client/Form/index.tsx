import { FormClient } from "@models/client";
import { alpha, Box, LinearProgress, Paper, useTheme } from "@mui/material";

import { Card } from "./Card";
import { Header } from "./Header";

type Props = {
  isLoading?: boolean;
  formData: FormClient;
  method: "POST" | "PUT";
  setFormData: (value: FormClient) => void;
};

export function Form(props: Props) {
  const theme = useTheme();

  const { method, formData, setFormData, isLoading = false } = props;

  return (
    <Box sx={{ p: 2 }}>
      <Header method={method} />

      <Box component={Paper} variant="outlined" sx={{ p: 2, m: 2 }}>
        {isLoading && (
          <LinearProgress
            variant="indeterminate"
            sx={{
              height: 6,
              borderRadius: 3,
              mb: 2,
              backgroundColor: alpha(theme.palette.primary.main, 0.1),
            }}
          />
        )}

        <Card method={method} formData={formData} setFormData={setFormData} />
      </Box>
    </Box>
  );
}
