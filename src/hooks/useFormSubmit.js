import useAxios from "axios-hooks";

export const useFormSubmit = (url) => {
  // Post the form, just make sure to set the 'Content-Type' header
  const [{ data, loading, error, response }, execute] = useAxios(
    {
      url: "https://us-central1-philosophie-bakery.cloudfunctions.net" + url,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
    { manual: true }
  );

  return [{ data, loading, error, response }, execute];
};
