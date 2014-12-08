/*
 * jt-menu.js - responsive menu widget
 *
 * version 0.01 (2014/12/05)
 *
 *
 * Depends:
 * - jQuery 1.7.2+
 * - jQuery UI 1.8 widget factory
 */

(function ($) {

    $.widget("jt.jtmenu", {

        _DOM: {
            template: null
        },

        options: {
            links: []
        },

        _create: function () {

            var self = this,
                el = this.element;

            self._initDOM();

            self._bindEvents();
        },

        destroy: function () {

            var self = this,
                element = this.element;

            self._unbindEvents();

            self._destroyDOM();

            $.Widget.prototype.destroy.call(this);

            self = null;

            return this;

        },

        _initDOM: function () {

            var self = this,
                el = this.element,
                DOM = self._DOM;


            el.addClass('jt-menu');

            DOM.template = self._generateTemplate();


            el.html(DOM.template);


        },

        _generateTemplate: function () {

            var self = this,
                el = this.element,
                DOM = self._DOM,
                o = self.options,
                selected = null;


            var template = '<nav class="main-nav">';

            for (var i = 0; i < o.links.length; i++) {

                var link = o.links[i];

                if (i == 0) {

                    template += ('<a class="handle nav-button button"');
                    template += (' href="' + link.href + '">' + link.title + '</a>');
                    template += ('<ul class="nav-list">');

                    selected = link;

                }
                template += ('<li id="nav-item-' + link.title.toLowerCase() + '" class="nav-list-item">');
                template += ('<a class="nav-button button" href="' + link.href + '">' + link.title + '</a></li>');


            }

            template += '</ul></nav>';

            self.setSelected(selected);

            return template;
        },

        _destroyDOM: function () {

            var self = this,
                el = this.element;

        },

        _bindEvents: function () {

            var self = this,
                el = this.element;


        },

        _unbindEvents: function () {

            var self = this,
                el = this.element;

        },

        setSelected: function (selected) {


            /// not doing anything yet.

        }

    });

})(jQuery);