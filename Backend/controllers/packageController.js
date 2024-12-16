import TourPackage from "../Models/tourpackage.js";

export const getAllPackages = async (req, res) => {
  try {
    const packages = await TourPackage.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ error: "error while fetching the packages" });
  }
};

export const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;
    const packaged = await TourPackage.findById(id);
    if (!packaged) {
      return res.status(404).json({ error: "package not found" });
    }
    res.json(packaged);
  } catch (error) {
    res.status(500).json({ error: "error while fetching the packagea" });
  }
};
