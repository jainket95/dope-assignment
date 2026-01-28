// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import App from '../App';
// import '../test-utils/setupApiMock';

// describe('Data Table Integration Tests', () => {
//   test('search filters table rows', async () => {
//     render(<App />);

//     await screen.findByText('Taylor Hessel');

//     const search = screen.getByTestId('search-input');
//     await userEvent.type(search, 'ricardo');

//     await waitFor(() => {
//       expect(screen.getByText('Ricardo Skiles')).toBeInTheDocument();
//       expect(screen.queryByText('Taylor Hessel')).not.toBeInTheDocument();
//     });
//   });

//   test('health filter dropdown filters rows', async () => {
//     render(<App />);

//     await screen.findByText('Taylor Hessel');

//     const filterToggle = screen.getByTestId('health-filter-toggle');
//     await userEvent.click(filterToggle);

//     const critical = await screen.findByTestId('health-filter-critical');
//     await userEvent.click(critical);

//     await waitFor(() => {
//       expect(screen.getByText('Taylor Hessel')).toBeInTheDocument();
//       expect(screen.queryByText('Sally Metz')).not.toBeInTheDocument();
//     });
//   });

//   test('select row and submit logs correct id', async () => {
//     const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

//     render(<App />);

//     await screen.findByText('Taylor Hessel');

//     const checkbox = screen.getByTestId(
//       'row-checkbox-ba89d91a-5a3c-4263-9d81-abc744dad043'
//     );

//     await userEvent.click(checkbox);

//     const submit = screen.getByTestId('submit-btn');
//     await userEvent.click(submit);

//     expect(logSpy).toHaveBeenCalledWith(['ba89d91a-5a3c-4263-9d81-abc744dad043']);

//     logSpy.mockRestore();
//   });

//   test('sort toggle orders by power', async () => {
//     render(<App />);

//     await screen.findByText('Taylor Hessel');

//     const sort = screen.getByTestId('sort-toggle');
//     await userEvent.click(sort);

//     await waitFor(() => {
//       const rows = screen.getAllByRole('row');
//       expect(rows[1]).toHaveTextContent('Sally Metz');
//     });
//   });
// });

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import * as api from '../api/characters';
import { mockCharacters } from '../test-utils/mocks/characters';
import { useCharacterStore } from '../store/useCharacterStore';

beforeEach(() => {
  useCharacterStore.getState().reset();
});

jest.mock('../api/characters', () => ({
  fetchCharacters: jest.fn(),
}));

(api.fetchCharacters as jest.Mock).mockResolvedValue(mockCharacters);

describe('Data Table Integration Tests', () => {
  test('search filters table rows', async () => {
    render(<App />);

    await screen.findByTestId('row-checkbox-ba89d91a-5a3c-4263-9d81-abc744dad043');

    const search = screen.getByTestId('search-input');
    await userEvent.type(search, 'ricardo');

    await waitFor(() => {
      expect(screen.getByText('Ricardo Skiles')).toBeInTheDocument();
      expect(screen.queryByText('Taylor Hessel')).not.toBeInTheDocument();
    });
  });

  test('health filter dropdown filters rows', async () => {
    render(<App />);

    await screen.findByTestId('row-checkbox-ba89d91a-5a3c-4263-9d81-abc744dad043');

    const filterToggle = screen.getByTestId('health-filter-toggle');
    await userEvent.click(filterToggle);

    const critical = await screen.findByTestId('health-filter-critical');
    await userEvent.click(critical);

    await waitFor(() => {
      expect(screen.getByText('Taylor Hessel')).toBeInTheDocument();
      expect(screen.queryByText('Sally Metz')).not.toBeInTheDocument();
    });
  });

  test('select row and submit logs correct id', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<App />);

    const checkbox = await screen.findByTestId(
      'row-checkbox-ba89d91a-5a3c-4263-9d81-abc744dad043'
    );

    await userEvent.click(checkbox);

    const submit = screen.getByTestId('submit-btn');
    await userEvent.click(submit);

    expect(logSpy).toHaveBeenCalledWith(['ba89d91a-5a3c-4263-9d81-abc744dad043']);

    logSpy.mockRestore();
  });

  test('sort toggle orders by power', async () => {
    render(<App />);

    await screen.findByTestId('row-checkbox-ba89d91a-5a3c-4263-9d81-abc744dad043');

    const sort = screen.getByTestId('sort-toggle');
    await userEvent.click(sort);

    await waitFor(() => {
      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Sally Metz');
    });
  });
});
