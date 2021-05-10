/**
 * Service Methods
 */

const getPublicMessage = () => {
  return {
    message: "The API doesn't require an access token to share this message.",
  };
};

const getProtectedMessage = () => {
  return {
    message: "The API successfully validated your access token.",
  };
};

const getRoleBasedMessage = () => {
  return {
    message: "You called the Role Based Endpoint.",
  };
};



module.exports = {
  getPublicMessage,
  getProtectedMessage,
  getRoleBasedMessage,
};
