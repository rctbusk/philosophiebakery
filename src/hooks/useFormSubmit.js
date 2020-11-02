import useAxios from "axios-hooks";

export const useFormSubmit = (url) => {
  // Post the form, just make sure to set the 'Content-Type' header
  const [{ data, loading, error, response }, execute] = useAxios({
    url,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return [{ data, loading, error, response }, execute];
};
