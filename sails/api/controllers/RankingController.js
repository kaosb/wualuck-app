/**
 * RankingController
 *
 * @description :: Server-side logic for managing rankings
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	vote: function (req, res, next) {
    var id = req.param('ranking');

    Ranking.findOne(id, function(_err, rank) {
      if (rank === undefined) { return res.notFound(); }
      if (_err) { return next(_err); }

      Ranking.update(id, {votes: rank.votes + 1}, function(_err, rank) {
        if (rank.length === 0) { return res.notFound(); }
        if (_err) { return next(_err); }

        res.json(rank[0]);
      });
    });
  }
};

