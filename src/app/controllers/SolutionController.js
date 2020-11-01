const Solution = require('../models/Solution');

class SolutionController {
    async store(req, res) {
        try {
            const solution = new Solution({
                name: req.body.name,
            });
            const existingSolution = await Solution.findOne({ name: req.body.name });

            if (existingSolution) { // A solution with this name already exists
                return res.status(400).json({
                    reason: "This solution already exists"
                });
            }

            await solution.save();

            return res.status(200).json({
                id: solution._id,
                name: solution.name,
            });
        } catch (err) {
            return res.status(500).json({ error: 'Internal server error', err });
        }
    }

    async delete(req, res) {
        try {
            const solution = await Solution.findById(req.params.id);
            let status = 200;

            if (solution) {
                await solution.remove();
            } else {
                status = (400);
            }

            return res.sendStatus(status);
        } catch (err) {
            return res.status(400).json({ error: 'Solution not found' });
        }
    }
}

module.exports = new SolutionController();
