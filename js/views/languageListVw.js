var _ = require('underscore'),
    Backbone = require('backbone'),
    $ = require('jquery');
Backbone.$ = $;
var fs = require('fs'),
    loadTemplate = require('../utils/loadTemplate'),
    languagesModel = require('../models/languagesMd'),
    chooseLanguagesCollection = require('../collections/chooseLanguageCl'),
    chooseLanguageView = require('../views/chooseLanguageVw');

module.exports = Backbone.View.extend({

  initialize: function(){
    var self = this;
    this.languages = new languagesModel();
    this.chooseLanguages = new chooseLanguagesCollection(this.languages.get('languages'));
    this.subViews = [];
    this.render();
  },

  render: function(){
    var self = this;
    _.each(this.chooseLanguages.models, function(item){
      self.renderItem(item);
    },this);
  },

  renderItem: function(item){
    var chooseLanguage = new chooseLanguageView({
      model: item
    });
    this.subViews.push(chooseLanguage);
    //$el must be passed in by the constructor
    this.$el.append(chooseLanguage.render().el);
  },

  close: function(){
    _.each(this.subViews, function(subView) {
      if(subView.close){
        subView.close();
      }else{
        subView.remove();
      }
    });
    this.remove();
  }
});

