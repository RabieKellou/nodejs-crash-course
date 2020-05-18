const express = require("express");
const router = express.Router();
const crypto = require("crypto");
//Get time
router.get("/time", (req, res, next) => {
	res.json({
		time: new Date().toISOString(),
	});
});

//post request
router.post("/hash", (req, res, next) => {
	const plaintext = req.body.plaintext;
	const hash = crypto.createHash("md5").update(plaintext).digest("hex");
	res.json({
		plaintext,
		hash,
	});
});

router.get("/:person/:greeting", (req, res, next) => {
	//hello?name=James
	//const name = req.query.name || "user";
	//Or hello/:name

	const name = req.params.person;
	const greeting = req.params.greeting;

	res.render("hello", { name, greeting });
});

module.exports = router;
