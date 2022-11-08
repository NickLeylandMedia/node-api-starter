import { Validator, DetailedValue } from "node-data-validator";

//Validate 'Add Item' Request
const valAddGirl = (req: any) => {
  //Validator Data Model
  const model = {
    name: new DetailedValue(String, { required: true }),
    alias: new DetailedValue(String, { required: false }),
    picture: new DetailedValue(String, { required: false }),
    primary_hair_color: new DetailedValue(String, { required: true }),
    dob: new DetailedValue(String, { required: false }),
    breast_class: new DetailedValue(String, { required: true }),
    breast_size: new DetailedValue(String, { required: false }),
    body_type: new DetailedValue(String, { required: true }),
    retired: new DetailedValue(Boolean, { required: false }),
  };

  //Validation Check
  return Validator(req, model);
};

export { valAddGirl };
