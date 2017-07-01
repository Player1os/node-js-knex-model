// Load npm modules.
import * as Joi from 'joi'

// Expose the validation schema.
// TODO: Verify if this matches the legacy reg exp.
export default Joi.number().integer().positive().allow(0)