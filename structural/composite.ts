// Let us compose objects into tree structures and then work these structures as if they were
// individual objects

interface BattleField {
  render(): void;
}

class NormalBattleField implements BattleField {
  render(): void {
    console.log("Render normal battlefield");
  }
}

class ArenaBattleField implements BattleField {
  render(): void {
    console.log("Render arena battlefield");
  }
}

class CustomBattleField implements BattleField {
  private fields: BattleField[] = [];

  render(): void {
    this.fields.forEach(field => field.render());
  }

  add(field: BattleField): void {
    this.fields.push(field);
  }
}

const customBattleField = new CustomBattleField();
customBattleField.add(new NormalBattleField());
customBattleField.add(new ArenaBattleField());

const newCustomBattleField = new CustomBattleField();
newCustomBattleField.add(new NormalBattleField());
newCustomBattleField.add(new ArenaBattleField());

customBattleField.add(newCustomBattleField);
customBattleField.render();
