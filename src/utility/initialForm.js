export const initialForm = () => {
  return [
    {
      label: "Question",
      type: "text",
      placeholder: "Question",
      name: "question",
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
      errorMessage: "this field cant be empty",
    },
    {
      label: "Answer 1",
      type: "text",
      placeholder: "img url",
      name: "answer1",
      value: "",
      validation: {
        required: true,
        url: /^(https:\/\/restcountries.eu\/data\/([a-zA-Z]{3}).svg)$/,
      },
      valid: false,
      touched: false,
      errorMessage:
        "Url must be https://restcountries.eu/data/(3 dight iso).svg",
    },
    {
      label: "Answer 2",
      type: "text",
      placeholder: "img url",
      name: "answer2",
      value: "",
      validation: {
        required: true,
        url: /^(https:\/\/restcountries.eu\/data\/([a-zA-Z]{3}).svg)$/,
      },
      valid: false,
      touched: false,
      errorMessage:
        "Url must be https://restcountries.eu/data/(3 dight iso).svg",
    },
    {
      label: "Answer 3",
      type: "text",
      placeholder: "img url",
      name: "answer3",
      value: "",
      validation: {
        required: true,
        url: /^(https:\/\/restcountries.eu\/data\/([a-zA-Z]{3}).svg)$/,
      },
      valid: false,
      touched: false,
      errorMessage:
        "Url must be https://restcountries.eu/data/(3 dight iso).svg",
    },
    {
      label: "Answer 4",
      type: "text",
      placeholder: "img url",
      name: "answer4",
      value: "",
      validation: {
        required: true,
        url: /^(https:\/\/restcountries.eu\/data\/([a-zA-Z]{3}).svg)$/,
      },
      valid: false,
      touched: false,
      errorMessage:
        "Url must be  https://restcountries.eu/data/(3 dight iso).svg",
    },
    {
      label: "Right answer",
      as: "select",
      name: "rightAnswer",
      value: "1",
      valid: true,
      touched: true,
      options: [1, 2, 3, 4],
    },
  ];
};
