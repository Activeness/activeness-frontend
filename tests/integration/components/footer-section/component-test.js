import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let service;

moduleForComponent('footer-section', 'Integration | Component | footer section', {
  integration: true,
  setup() {
    service = this.container.lookup('service:intl');
    service.setLocale('de-de');
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{footer-section}}`);
  assert.equal(this.$('.footer-content').length, 1);
});
