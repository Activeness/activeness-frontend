import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let service;

moduleForComponent('header-nav', 'Integration | Component | header nav', {
  integration: true,
  setup() {
    service = this.container.lookup('service:intl');
    service.setLocale('de-de');
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{header-nav}}`);
  assert.equal(this.$('.navbar.fixed-top').length, 1);
});
