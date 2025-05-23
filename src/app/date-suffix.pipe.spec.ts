import { DateSuffix } from './date-suffix.pipe';

describe('DateSuffix Pipe', () => {
  let pipe: DateSuffix;

  beforeEach(() => {
    pipe = new DateSuffix();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return empty string for null input', () => {
    expect(pipe.transform(null)).toBe('');
  });

  it('should return empty string for empty input', () => {
    expect(pipe.transform('')).toBe('');
  });

  it('should return "st" for days that end with 1 (except 11)', () => {
    expect(pipe.transform('1')).toBe('st');
    expect(pipe.transform('21')).toBe('st');
    expect(pipe.transform('31')).toBe('st');
  });

  it('should return "nd" for days that end with 2 (except 12)', () => {
    expect(pipe.transform('2')).toBe('nd');
    expect(pipe.transform('22')).toBe('nd');
  });

  it('should return "rd" for days that end with 3 (except 13)', () => {
    expect(pipe.transform('3')).toBe('rd');
    expect(pipe.transform('23')).toBe('rd');
  });

  it('should return "th" for all other days', () => {
    expect(pipe.transform('4')).toBe('th');
    expect(pipe.transform('5')).toBe('th');
    expect(pipe.transform('10')).toBe('th');
    expect(pipe.transform('11')).toBe('th');
    expect(pipe.transform('12')).toBe('th');
    expect(pipe.transform('13')).toBe('th');
    expect(pipe.transform('20')).toBe('th');
    expect(pipe.transform('24')).toBe('th');
    expect(pipe.transform('25')).toBe('th');
    expect(pipe.transform('30')).toBe('th');
  });
});
