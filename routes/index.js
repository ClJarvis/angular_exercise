/* GET home page. */
exports.index = function(req, res, next) {
  res.render('index', { title: 'Needs' });
});

exports.partials = function(req, res) {
	res.render('partials/' + req.parmas.name);
};

