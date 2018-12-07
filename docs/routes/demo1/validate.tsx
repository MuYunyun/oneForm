const validateConfig = {
  name: { type: "string", required: true },
  age: [
    {
      type: "number", required: true, transform(value: string) {
        return parseInt(value, 10)
      }
    },
    // {
    //   validator(rule: any, value: any, callback: any, source: any, options: any) {
    //     if (value < 18) {
    //       callback(['are you sure?'])
    //     }
    //     callback([])
    //   }
    // }
  ],
}

export default validateConfig