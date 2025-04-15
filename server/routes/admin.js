// Get all alumni
router.get('/alumni', async (req, res) => {
    const alumni = await Alumni.find();
    res.json(alumni);
  });
  