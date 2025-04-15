// Update profile
router.put('/:id', async (req, res) => {
    try {
      const updated = await Alumni.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  