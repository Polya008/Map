import ErrorRepository from '../ErrorRepository';

test('Checking translate function result', () => {
  const gameErrorRepo = new ErrorRepository();
  gameErrorRepo.errorDataBase.set('123', 'not enough health');
  gameErrorRepo.errorDataBase.set('12#', 'not enough power');
  expect(gameErrorRepo.translate('123')).toBe('not enough health');
  expect(gameErrorRepo.translate('12#')).toBe('not enough power');
  expect(gameErrorRepo.translate('12')).toBe('Unknown error');
});