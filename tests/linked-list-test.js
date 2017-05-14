import test from 'ava';
import { LinkedList } from '../linked-list';

test('it implements push interface', t => {
  t.plan(1);

  const list = new LinkedList();

  t.is(typeof(list.push), 'function');
});

test('push increases number of nodes in list by one', t => {
  t.plan(2);

  const list = new LinkedList();

  t.truthy(list.length === 0);

  list.push(10);

  t.truthy(list.length === 1);
});

test('push adds node to list', t => {
  const list = new LinkedList();

  list.push(10);

  t.truthy(list.first === list.last);
});

test('multiple pushes sets correct head and tail nodes', t => {
  t.plan(2);

  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  t.truthy(list.first.value === 10);
  t.truthy(list.last.value === 30);
});

test('single push sets correct next and prev values', t => {
  t.plan(2);

  const list = new LinkedList();

  let node = list.push(10);

  t.truthy(node.prev === null);
  t.truthy(node.next === null);
});

test('multiple pushes set correct next and prev values', t => {
  t.plan(6);

  const list = new LinkedList();

  const node1 = list.push(10);
  const node2 = list.push(20);
  const node3 = list.push(30);

  t.truthy(node1.prev === null);
  t.truthy(node1.next === node2);

  t.truthy(node2.prev === node1);
  t.truthy(node2.next === node3);

  t.truthy(node3.prev === node2);
  t.truthy(node3.next === null);

});

test('it implements pop interface', t => {
  t.plan(1);

  const list = new LinkedList();

  t.is(typeof(list.pop), 'function');
});

test('pop reduces number of nodes in list by one', t => {
  t.plan(2);

  const list = new LinkedList();

  list.push(10);

  t.truthy(list.length === 1);

  list.pop();

  t.truthy(list.length === 0);
});

test('pop correctly resets list', t => {
  t.plan(2);

  const list = new LinkedList();

  list.push(10);
  list.pop();

  t.truthy(list.first  === null);
  t.truthy(list.last   === null);
});

test('single pop sets correct next and prev values', t => {
  t.plan(2);

  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  list.pop();

  t.truthy(list.last.prev === list.first);
  t.truthy(list.first.next === list.last);

});

test('multiple pops return correct nodes', t => {
  t.plan(4);

  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);
  list.push(40);
  list.push(50);

  const node1 = list.pop();
  const node2 = list.pop();
  const node3 = list.pop();

  t.truthy(node1.value === 50);
  t.truthy(node2.value === 40);
  t.truthy(node3.value === 30);

  t.truthy(list.last.value === 20);

});

test('it implements find interface', t => {
  t.plan(1);

  const list = new LinkedList();

  t.is(typeof(list.find), 'function');
});

test('find returns node at index', t => {
  t.plan(1);

  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  const node = list.find(2);

  t.truthy(node.value === 30);
});

test('it implements delete interface', t => {
  t.plan(1);

  const list = new LinkedList();

  t.is(typeof(list.delete), 'function');
});

test('delete returns node at index', t => {
  t.plan(1);

  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  const node = list.delete(2);

  t.truthy(node.value === 30);
});

test('delete decreases number of nodes in list', t => {
  t.plan(2);

  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  t.truthy(list.length === 3);

  const node = list.delete(2);

  t.truthy(list.length === 2);
});

test('deleting node in list with one item', t => {
  t.plan(2);

  const list = new LinkedList();

  list.push(10);

  const node = list.delete(0);

  t.truthy(node.value === 10);
  t.truthy(list.first === null & list.last === null);
});

test('delete sets correct next and prev values', t => {
  t.plan(8);

  const list = new LinkedList();

  list.push(10);
  list.push(20);
  list.push(30);

  const node = list.delete(1);

  t.truthy(node.value === 20);
  t.truthy(list.length === 2);

  const node1 = list.find(0);
  const node2 = list.find(1);

  t.truthy(node1.value === 10);
  t.truthy(node2.value === 30);

  t.truthy(node1.next === node2);
  t.truthy(node2.prev === node1);

  t.truthy(list.first === node1);
  t.truthy(list.last === node2);
});
