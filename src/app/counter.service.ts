export class CounterService {
  activeToInactiveCount = 0;
  inactiveToActiveCount = 0;

  incrActiveToInactive() {
    this.activeToInactiveCount++;
    console.log('active->inactive: ' + this.activeToInactiveCount);
  }

  incrInactiveToActive() {
    this.inactiveToActiveCount++;
    console.log('inactive->active: ' + this.inactiveToActiveCount);
  }
}
