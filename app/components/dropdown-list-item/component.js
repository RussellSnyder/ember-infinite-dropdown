import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'li',

  init() {
    this._super(...arguments);

    this.set('activeItems', []);
  },

  onMouseEnter: function() {},
  onMouseLeave: function() {},

  isActive: computed('activeItems.[]', function() {
    return this.activeItems[0] === this;
  }),

  mouseEnter() {
    this.setActiveItems(this)
  },

  mouseLeave() {
    this.clearActiveItems(this)
  }
});
