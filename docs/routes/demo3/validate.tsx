const validateConfig = {
  name: { type: "string", required: true },
  age: [
    {
      type: "number", required: true, transform(value: string) {
        return parseInt(value, 10)
      }
    },
  ],
}

export default validateConfig