import { defineBuildConfig } from 'unbuild';
import { buildConfigPreset } from '@sollicitude/config';

export default defineBuildConfig({
  preset: buildConfigPreset,
  name: '@sollicitude/PACKAGE_NAME',
  entries: [],
});
