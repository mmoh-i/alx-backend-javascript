const task = 'I prefer const whe I can.';
const combination =  'But sometimes let';

export function taskFirst() {
	return task;
}
export function getLast() {
	return 'is okay';	
}
export function taskNext() {
	combination += getLast();

	return combination;

}
