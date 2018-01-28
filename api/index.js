import express from 'express';
import data from '../src/testdata';

const router = express.Router();

router.get('/forms', (req, res) => {
  res.send({
    forms: data.forms
  });
});

export default router;