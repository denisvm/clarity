/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  templateUrl: './password.demo.html',
})
export class PasswordDemo {
  verticalToggle = false;
  vertical = {
    one: '',
    two: '',
    three: '',
  };
  horizontal = {
    one: '',
    two: '',
    three: '',
  };
  compact = {
    one: '',
    two: '',
    three: '',
  };
}
