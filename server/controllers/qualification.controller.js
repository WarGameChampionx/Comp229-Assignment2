import Qualification from "../models/qualification.model.js";

export const getQualifications = async (req, res) => {
    try
    {
        const qualifications = await Qualification.find();
        res.json(qualifications);
    }
    catch (error)
    {
        res.status(500).json({ message: error.message });
    }
};

export const getQualificationById = async (req, res) => {
    try
    {
        const qualification = await Qualification.findById(req.params.id);
        if (!qualification)
        {
            return res.status(404).json({ message: "Qualification not found" });
        }

        res.json(qualification);
    }
    catch (error)
    {
        res.status(500).json({ message: error.message });
    }
};

export const createQualification = async (req, res) => {
    try
    {
        const qualification      = new Qualification(req.body);
        const savedQualification = await qualification.save();

        res.status(201).json(savedQualification);
    }
    catch (error)
    {
        res.status(400).json({ message: error.message });
    }
};

export const updateQualification = async (req, res) => {
    try
    {
        const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!qualification)
        {
            return res.status(404).json({ message: "Qualification not found" });
        }

        res.json(qualification);
    }
    catch (error)
    {
        res.status(400).json({ message: error.message });
    }
};

export const deleteQualification = async (req, res) => {
    try
    {
        const qualification = await Qualification.findByIdAndDelete(req.params.id);
        if (!qualification)
        {
            return res.status(404).json({ message: "Qualification not found" });
        }

        res.json({ message: "Qualification deleted" });
    }
    catch (error)
    {
        res.status(500).json({ message: error.message });
    }
};

export const deleteAllQualifications = async (req, res) => {
    try
    {
        await Qualification.deleteMany({});

        res.json({message: "All qualifications deleted"});
    }
    catch (error)
    {
        res.status(500).json({ message: error.message });
    }
};