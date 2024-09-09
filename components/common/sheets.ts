import { registerSheet, SheetDefinition, ActionSheetRef } from 'react-native-actions-sheet';
import CertificateActionSheet from '../Auth/CertificateActionSheet';
 
registerSheet('certificate-sheet', CertificateActionSheet);
 
// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'certificate-sheet': SheetDefinition<{
      payload: {
        type: 'organization';
        ref: React.RefObject<ActionSheetRef>;
        setSelectedOrganization: React.Dispatch<React.SetStateAction<{component: JSX.Element; id: number} | null>>;
      } | {
        type: 'level';
        ref: React.RefObject<ActionSheetRef>;
        setSelectedLevel: React.Dispatch<React.SetStateAction<{component: JSX.Element; id: number} | null>>;
        organizationId: number;
      };
    }>;
  }
}
 
export {};