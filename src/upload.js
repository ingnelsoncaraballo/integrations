import B2 from 'backblaze-b2';

const uploadHandler = async (req, res) => {
  res.status(200).json({});
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default uploadHandler;