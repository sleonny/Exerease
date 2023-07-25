const ContactUs = require("../../models/ContactUs");

const resolvers = {
  Mutation: {
    submitContactUsForm: async (_, { name, email, phone, message }) => {
      try {
        // Create a new ContactUs document in the database
        const newContactUs = new ContactUs({
          name,
          email,
          phone,
          message,
        });
        const savedContactUs = await newContactUs.save();

        return savedContactUs;
      } catch (error) {
        throw new Error("Failed to submit the form.");
      }
    },
  },
};

module.exports = resolvers;
