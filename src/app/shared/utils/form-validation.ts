import {FormControl, FormGroup, AbstractControl} from '@angular/forms';

export class FormValidation {
  /**
   * id 체크
   * 숫자, 영문만 입력 가능
   */
  static id() {
    return (c: FormControl) => {
      const ID_REGEXP = /^[0-9a-z]+$/;

      return ID_REGEXP.test(c.value)
        ? null
        : {
            validate: {
              id: true
            }
          };
    };
  }

  /**
   * 닉네임체크
   * 한굴, 숫자, 영문만 입력 가능
   */
  static nickname() {
    return (c: FormControl) => {
      const NICKNAME_REGEXP = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]+$/;

      return NICKNAME_REGEXP.test(c.value)
        ? null
        : {
            validate: {
              nickname: true
            }
          };
    };
  }

  /**
   * 이메일 체크
   */
  static email() {
    return (c: FormControl) => {
      const EMAIL_REGEXP = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@([0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3})$/i;

      return EMAIL_REGEXP.test(c.value)
        ? null
        : {
            validate: {
              email: true
            }
          };
    };
  }

  /**
   * 패스워드 체크 - 숫자,영문자,특수기호 포함 8자리 이상
   */
  static password() {
    return (c: FormControl) => {
      const EMAIL_REGEXP = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;

      return EMAIL_REGEXP.test(c.value)
        ? null
        : {
            validate: {
              pw: true
            }
          };
    };
  }

  /**
   * 핸드폰 체크 - 숫자만
   */
  static phone() {
    return (c: FormControl) => {
      const EMAIL_REGEXP = /^(010\d{4}\d{4})|(011|016|018|019\d{3,4}\d{4})$/;

      return EMAIL_REGEXP.test(c.value)
        ? null
        : {
            validate: {
              phone: true
            }
          };
    };
  }

  /**
   * 폼 trim
   * @param formGroup
   */
  static cleanForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(key =>
      formGroup.get(key).setValue(formGroup.get(key).value.trim())
    );
  }

  static cleanValue(control: AbstractControl) {
    if (control.value == null) {
      return;
    }
    control.setValue(control.value.trim());
  }
}
