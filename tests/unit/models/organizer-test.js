import { moduleForModel, test } from 'ember-qunit';

moduleForModel('organizer', 'Unit | Model | organizer', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
