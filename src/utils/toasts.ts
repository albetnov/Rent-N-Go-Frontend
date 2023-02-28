import { createStandaloneToast } from "@chakra-ui/react";

const { ToastContainer, toast } = createStandaloneToast();

const callToast = (
  title: string,
  status: "success" | "error" | "warning" | "info" = "success",
  duration: number = 2500,
  description?: string
) =>
  toast({
    title,
    description,
    status,
    position: "top-right",
    duration: duration,
  });

export { ToastContainer, toast, callToast };
