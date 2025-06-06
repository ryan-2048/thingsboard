///
/// Copyright © 2016-2025 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import {
  BackgroundSettings,
  BackgroundType,
  ColorSettings,
  constantColor,
  cssUnit,
  Font
} from '@shared/models/widget-settings.models';

export interface LabelValueCardWidgetSettings {
  autoScale: boolean;
  showLabel: boolean;
  label: string;
  labelFont: Font;
  labelColor: ColorSettings;
  showIcon: boolean;
  icon: string;
  iconSize: number;
  iconSizeUnit: cssUnit;
  iconColor: ColorSettings;
  valueFont: Font;
  valueColor: ColorSettings;
  background: BackgroundSettings;
  padding: string;
}

export const labelValueCardWidgetDefaultSettings: LabelValueCardWidgetSettings = {
  autoScale: true,
  showLabel: true,
  label: 'Temperature',
  labelFont: {
    family: 'Roboto',
    size: 20,
    sizeUnit: 'px',
    style: 'normal',
    weight: '400',
    lineHeight: '24px'
  },
  labelColor: constantColor('rgba(0, 0, 0, 0.87)'),
  showIcon: true,
  icon: 'thermostat',
  iconSize: 24,
  iconSizeUnit: 'px',
  iconColor: constantColor('#5469FF'),
  valueFont: {
    family: 'Roboto',
    size: 20,
    sizeUnit: 'px',
    style: 'normal',
    weight: '400',
    lineHeight: '24px'
  },
  valueColor: constantColor('rgba(0, 0, 0, 0.87)'),
  background: {
    type: BackgroundType.color,
    color: '#fff',
    overlay: {
      enabled: false,
      color: 'rgba(255,255,255,0.72)',
      blur: 3
    }
  },
  padding: '12px'
};
