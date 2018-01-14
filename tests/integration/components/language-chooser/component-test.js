import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let service;

moduleForComponent('language-chooser', 'Integration | Component | language chooser', {
  integration: true,
  setup() {
    service = this.container.lookup('service:intl');
    service.setLocale('de-de');
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{language-chooser}}`);
  assert.equal(this.$('.language-chooser').lenght, true);
});
