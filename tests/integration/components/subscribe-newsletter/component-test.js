import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('subscribe-newsletter', 'Integration | Component | subscribe newsletter', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{subscribe-newsletter}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#subscribe-newsletter}}
      template block text
    {{/subscribe-newsletter}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
