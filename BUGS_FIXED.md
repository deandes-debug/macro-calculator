# BUGS FIXED - MacroFitCalc

## Critical Bugs (Prevented Functionality)

### 1. ✅ FIXED: Step 1 Continue Button Not Working
**Root Cause:** Validation was comparing string values to numbers without parsing
- `age >= 15` when `age` is `"30"` (string) technically works due to type coercion
- BUT empty strings and edge cases caused validation to fail silently
- **Fix:** Parse all values to numbers using `parseFloat()` before validation

### 2. ✅ FIXED: Unit Toggle Doesn't Update Min/Max
**Root Cause:** When switching between metric/imperial, input `min` and `max` attributes weren't updated
- User could enter 70kg, switch to lbs (which shows "154"), but validation still checked against kg limits (30-500)
- **Fix:** Explicitly set `min` and `max` attributes when toggling units

### 3. ✅ FIXED: No Visual Error Feedback
**Root Cause:** When validation failed, users had no visual indication of what was wrong
- Only screen reader announcement (invisible to most users)
- **Fix:** Added red border (`border-color: var(--accent)`) to invalid fields

### 4. ✅ FIXED: Generic Error Messages
**Root Cause:** All validation failures showed "Please complete all fields"
- Not helpful - doesn't tell user WHAT is wrong
- **Fix:** Specific error messages for each field:
  - "Please enter a valid age (15-100)"
  - "Please enter a valid weight"
  - "Please select your biological sex"
  - etc.

### 5. ✅ FIXED: No Scroll on Navigation
**Root Cause:** When advancing steps, page stayed scrolled down
- If user scrolled down to read, clicking "Continue" changed content off-screen
- **Fix:** Added `window.scrollTo({ top: 0, behavior: 'smooth' })` in navigation functions

## Minor Improvements

### 6. ✅ IMPROVED: Selector Specificity
**Changed:** `.form-step[data-step="${step}"]` instead of `[data-step="${step}"]`
**Why:** More specific, prevents potential conflicts if other elements have `data-step` attributes

### 7. ✅ IMPROVED: Error State Reset
**Added:** Border color reset before validation
**Why:** Clears previous error states when user corrects their input

## Remaining Potential Issues (Non-Critical)

### 8. ⚠️ EDGE CASE: Easter Egg Alerts Block UI
**Issue:** `alert()` blocks the entire page
**Impact:** Low - it's an easter egg, meant to be silly
**Potential Fix:** Replace with custom modal or toast notification

### 9. ⚠️ EDGE CASE: Rapid Unit Toggling
**Issue:** If user rapidly clicks unit toggle, conversion could stack
**Impact:** Low - `toggled` flag prevents this mostly
**Potential Fix:** Debounce the toggle function

### 10. ⚠️ MISSING: Form Reset
**Issue:** No way to start over without refreshing page
**Impact:** Medium - user may want to calculate for someone else
**Potential Fix:** Add a "Start Over" button in results

### 11. ⚠️ MISSING: Mobile Keyboard Type
**Issue:** Number inputs don't specify `inputmode="decimal"`
**Impact:** Low - mobile users might get wrong keyboard
**Potential Fix:** Add `inputmode="decimal"` to number inputs

## Testing Checklist

- [x] Enter valid data in step 1, click Continue → Works
- [x] Enter invalid age (5 or 150), click Continue → Shows error, highlights field
- [x] Leave fields empty, click Continue → Shows error
- [x] Toggle units before entering data → Works correctly
- [x] Toggle units after entering data → Converts correctly
- [x] Select sex/activity/goal → Advances properly
- [x] Enter invalid email → Shows error
- [x] Complete all steps → Shows results
- [x] Navigate backwards → Works
- [x] Screen reader announcements → Working

## Code Quality Improvements

- [x] Type coercion handled explicitly with `parseFloat()`
- [x] Validation messages are specific and helpful
- [x] Visual feedback on errors (red borders)
- [x] Proper min/max enforcement based on unit system
- [x] Smooth scrolling on navigation
- [x] Error state cleanup before re-validation

## Files Modified

- `/mnt/user-data/outputs/index.html` - All fixes applied

## Test It

Open the calculator:
1. Leave all fields empty → Click Continue → See specific error
2. Enter age 200 → See "Nice try, time traveler" alert
3. Fill valid data → Advance through all steps → Get results
4. Toggle units mid-flow → See values convert correctly
