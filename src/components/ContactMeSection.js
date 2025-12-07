import {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message)
      formik.resetForm()
    }
  }, [response])

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: ""
    },
    onSubmit: (values) => { submit("https://fakeapicall.com/fake.json", values) },
    validationSchema: Yup.object({
      firstName: Yup
        .string()
        .required('Required'),
      email: Yup
        .string()
        .email('Invalid email address')
        .required('Required'),
      type: Yup
        .string(),
      comment: Yup
        .string()
        .min(25, 'Must be at least 25 characters')
        .required('Required'),
    }),
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#0a0e1a"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section" mb={2}>
          Get In Touch
        </Heading>
        <Box color="gray.400" fontSize="lg" mb={4}>
          Interested in security audits or collaboration? Let's connect.
        </Box>
        <Box
          p={6}
          rounded="xl"
          w="100%"
          bg="rgba(0, 255, 136, 0.03)"
          borderWidth="1px"
          borderColor="rgba(0, 255, 136, 0.2)"
        >
          <form onSubmit={(e) => {e.preventDefault(); formik.handleSubmit(e) }}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")} color="gray.800">
                  <option value="audit">Security Audit / Code Review</option>
                  <option value="development">Smart Contract Development</option>
                  <option value="consulting">Security Consulting</option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                width="full"
                bg="linear-gradient(135deg, #00ff88 0%, #00ccff 100%)"
                color="black"
                fontWeight="bold"
                _hover={{
                  bg: "linear-gradient(135deg, #00ccff 0%, #0080ff 100%)",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 20px rgba(0, 255, 136, 0.3)"
                }}
                transition="all 0.3s"
              >
                {isLoading ? "...Loading" : "Submit"}
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;