import {
  formatViewCount,
  truncateText,
  validateEmail,
  validatePassword,
} from '../utils/helpers';

describe('Helper Functions', () => {
  describe('formatViewCount', () => {
    test('formats million views', () => {
      expect(formatViewCount(1500000)).toBe('1.5M');
    });

    test('formats thousand views', () => {
      expect(formatViewCount(5000)).toBe('5.0K');
    });

    test('returns number as string for small counts', () => {
      expect(formatViewCount(500)).toBe('500');
    });
  });

  describe('truncateText', () => {
    test('truncates text to specified length', () => {
      const result = truncateText('This is a very long text', 10);
      expect(result).toBe('This is a ...');
    });

    test('returns text as-is if shorter than limit', () => {
      const text = 'Short text';
      expect(truncateText(text, 20)).toBe(text);
    });
  });

  describe('validateEmail', () => {
    test('validates correct email', () => {
      expect(validateEmail('test@example.com')).toBe(true);
    });

    test('rejects invalid email', () => {
      expect(validateEmail('invalid-email')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    test('accepts password with 6+ characters', () => {
      expect(validatePassword('password123')).toBe(true);
    });

    test('rejects password with less than 6 characters', () => {
      expect(validatePassword('pass')).toBe(false);
    });
  });
});
